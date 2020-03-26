import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";

class SecurityQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: 0,
            answer: ""
        }
    }

    handleChange = e => {
        console.log("change");
        this.setState({option: e.target.value})

        let questions = this.props.registerForm.state.securityQuestions
        alert(questions)
        questions[this.props.number].question = this.option
        this.props.registerForm.setState({securityQuestions: questions})
        alert(this.props.registerForm.state.securityQuestions[this.props.number].question)
    }

    handleAnswerChange = e => {
        this.setState({answer: e.target.value})

        let questions = this.props.registerForm.state.securityQuestions
        questions[this.props.number].answer = this.answer
        this.props.registerForm.setState({securityQuestions: questions})
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
                <Select value={this.state.option} onChange = {(e) => this.handleChange(e)} className="select" labelId ="security-question-label" autoWidth={true} displayEmpty>
                    <MenuItem value={"What is your mother's maiden name?"}>What is your mother's maiden name?</MenuItem>
                    <MenuItem value="What is the name of your favorite pet?">What is the name of your favorite pet?</MenuItem>
                    <MenuItem value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</MenuItem>
                    <MenuItem value="What street did you live on in third grade?">What street did you live on in third grade?"</MenuItem>
                    <MenuItem value="What was your childhood nickname?">What was your childhood nickname?</MenuItem>
                    <MenuItem value="What school did you attend in sixth grade?">What school did you attend in sixth grade?</MenuItem>
                </Select>
                <TextField value={this.state.answer} onChange = {(e) => this.handleAnswerChange(e)} className="security-answer" type="text" name="answer" margin="dense" 
                                variant="outlined" placeholder="Answer" required fullWidth/>
                </FormControl>
            </div>
        )
    }

}

export default SecurityQuestion;