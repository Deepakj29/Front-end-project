import React from "react";
class Calci extends React.Component {
    constructor(props) {
        super();
        this.state = {
            result: ""
        }
    }
    cal = () => {
        this.setState({ result: (eval(this.state.result)) })
        console.log("result");
    }
    handleclick = (event) => {
        const val = event.target.name;
        this.setState({ result: this.state.result + val })
        console.log("result");

    }
    reset = () => {
        this.setState({
            result: ""
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }
    render() {
        return (
            <>
                <div className="container calfull text-center  ">
                    <div className="row ">
                        <div className="col row-cols-1">
                            <form className=" formcon " >
                                <input type="text" value={this.state.result}></input>
                            </form>
                        </div>

                        <div className="calc container-fluid  text-center  ">
                            <button name="+" onClick={this.handleclick}>+</button>
                            <button name="-" onClick={this.handleclick}>-</button>
                            <button name="*" onClick={this.handleclick}>x</button>
                            <button name="/" onClick={this.handleclick}>÷</button>
                            <button name="1" onClick={this.handleclick}>1</button>
                            <button name="2" onClick={this.handleclick}>2</button>
                            <button name="3" onClick={this.handleclick}>3</button>
                            <button name="4" onClick={this.handleclick}>4</button>
                            <button name="5" onClick={this.handleclick}>5</button>
                            <button name="6" onClick={this.handleclick}>6</button>
                            <button name="7" onClick={this.handleclick}>7</button>
                            <button name="8" onClick={this.handleclick}>8</button>
                            <button name="9" onClick={this.handleclick}>9</button>
                            <button name="0" onClick={this.handleclick} >0</button>
                            <button name="." onClick={this.handleclick}>.</button>
                            <button name="=" onClick={this.cal}>=</button>
                            <button onClick={this.reset}>REST</button>
                            <button onClick={this.backspace}>BS</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Calci;
