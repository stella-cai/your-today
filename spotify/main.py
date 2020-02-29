import sys
import os
import spotipy
import spotipy.util as sp_util
from spotipy.oauth2 import SpotifyClientCredentials, SpotifyOauthError
from spotipy.client import SpotifyException
import webbrowser

scope = 'user-library-read playlist-read-private'

def authenticate_client():
    """
    Using credentials from the environment variables, attempt to authenticate with the spotify web API.
    If successful, create a spotipy instance and return it.
    :return: An authenticated Spotipy instance
    """
    try:
        # Get an auth token for this user
        client_credentials = SpotifyClientCredentials()
        print(client_credentials)
        spotify = spotipy.Spotify(client_credentials_manager=client_credentials)
        return spotify
    except SpotifyOauthError as e:
        print('API credentials not set.')
        sys.exit(1)

def authenticate_user(username):
    """
    Prompt the user for their username and authenticate them against the Spotify API.
    (NOTE: You will have to paste the URL from your browser back into the terminal)
    :return: (username, spotify object)
    """
    try:
        # Get an auth token for this user
        token = sp_util.prompt_for_user_token(username, scope=scope)
        spotify = spotipy.Spotify(auth=token)
        return username, spotify
    except SpotifyException as e:
        print('API credentials not set')
        sys.exit(1)
    except SpotifyOauthError as e:
        redirect_uri = os.environ.get('SPOTIPY_REDIRECT_URI')
        if redirect_uri is not None:
            print("wrong url")
        else:
            print("set up local host")
        sys.exit(1)

def get_playlists(spotify, username, ownnership = False):
    """
    Get all of a user's playlists
    """
    # Get all the playlists for this user
    playlists = []
    total = 1
    # The API paginates the results, so we need to iterate
    while len(playlists) < total:
        playlists_response = spotify.user_playlists(username, offset=len(playlists))
        playlists.extend(playlists_response.get('items', []))
        total = playlists_response.get('total')
    if ownnership:
        playlists = [playlist for playlist in playlists if
                     playlist.get('owner', {}).get('id') == username]
    d = {}
    for i, playlist in enumerate(playlists):
        d[playlist.get('name')] = playlist
    return d

def get_songs(spotify, playlist):
    tracks = []
    total = 1
    playlist_owner = playlist.get('owner', {}).get('id')
    while len(tracks) < total:
        tracks_response = spotify.user_playlist_tracks(playlist_owner, playlist.get('id'), offset=len(tracks))
        tracks.extend(tracks_response.get('items', []))
        total = tracks_response.get('total')
    tracks = [track.get('track') for track in tracks]
    d = {}
    for i, track in enumerate(tracks):
        d[track.get('name')] = track
    return d

if __name__ == "__main__":
    username = input("input your username: ")
    if username == '':
        username = "fzslloi0exb772mdmpjwvuezb"
    s = authenticate_client()
    user, s = authenticate_user(username)
    playlists = get_playlists(s, user)
    print("you have: ")
    for i in playlists:
        print("       " + i)
    playlist_name = input("input your playlist name: ")
    playlist = playlists[playlist_name]
    tracks = get_songs(s,playlist)
    d = {}
    for index, i in enumerate(tracks):
        print("       " + str(index+1) + '. ' + i)
        d[str(index+1)] = i
    track_name = input("input your track index")
    print(tracks[d[track_name]]['external_urls']) #this is url we want
    webbrowser.open(tracks[i]['external_urls']['spotify'])
