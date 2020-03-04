import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";

class SecurityQuestion extends React.Component {

    handleChange = event => {
        console.log("change");
        this.option = event.target.value;
        console.log(this.option);
    }

    formStyle = () => {
        return {
            width: '100%'
        }
    }

    render() {

        const {number}= this.props;
        console.log(number);

        return (
            <div className="security-question">
                <InputLabel className="security-question-label">{"Security Question " + number + "*"}</InputLabel>
                <FormControl required style={this.formStyle()}>
                <InputLabel className="security-question-label">{"Choose a Question"}</InputLabel>
                <Select className="select" value={this.option} labelId ="security-question-label"
                onChange={this.handleChange} autoWidth={true} displayEmpty>
                    <MenuItem value={"What is your mother's maiden name?"}>What is your mother's maiden name?</MenuItem>
                    <MenuItem value="What is the name of your favorite pet?">What is the name of your favorite pet?</MenuItem>
                    <MenuItem value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</MenuItem>
                    <MenuItem value="What street did you live on in third grade?">What street did you live on in third grade?"</MenuItem>
                    <MenuItem value="What was your childhood nickname?">What was your childhood nickname?</MenuItem>
                    <MenuItem value="What school did you attend in sixth grade?">What school did you attend in sixth grade?</MenuItem>
                </Select>
                <TextField className="security-answer" type="text" name="answer" margin="dense" 
                                variant="outlined" placeholder="Answer" required fullWidth/>
                </FormControl>
            </div>
        )
    }

}

export default SecurityQuestion;