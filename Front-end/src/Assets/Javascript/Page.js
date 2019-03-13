import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Page.scss';
export default class Page extends Component {
    constructor(){
        super();
        this.input = React.createRef();
        this.state = {
            //Each word needs to be its own array so it can be filter off the screen.
            words:[],
            words2:[],
            words3:[],
            words4:[],
            words5:[],
            words6:[],
            words7:[],
            words8:[],
            words9:[],
            words10:[],
            words11:[],
            words12:[],
            words13:[],
            words14:[],
            words15:[],
            words16:[],
            input: '',
            score:0,
            count: 30,
        }
    };
    wordsFetch = () => {
        Promise.all([
            // Each word needs its own fetch call. 
            // Using multiple fetch calls will give mutple different words. 
            // Using 1 fetch call will give the same word 15x.
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
            fetch('http://localhost:8080/page'),
        ])
        .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15, res16]) => 
        Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json(), res10.json(), res11.json(), res12.json(), res13.json(), res14.json(), res15.json(), res16.json()]))
        .then(([data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16]) => this.setState({
            // Taking the fetch call words from the server 
            // and putting them into the empty arrays.
            words: data1, 
            words2: data2,
            words3: data3,
            words4: data4,
            words5: data5,
            words6: data6,
            words7: data7,
            words8: data8,
            words9: data9,
            words10: data10,
            words11: data11,
            words12: data12,
            words13: data13,
            words14: data14,
            words15: data15,
            words16: data16,
        }));
    }
    // Function to change state and take the word off the screen.
    handleChange = (e) =>{
        this.setState({
            input:e.target.value
        })
    };
    // Function to clear the input bar after each entered word.
    clearInput= () => {
        this.setState({
            input:''
        })
    };
    //Filter to check if the word entered is spelled the same as the word in the array.
    handlekey = (e) => {
        e.preventDefault()
        let inputWord = this.input.current.value;
        let newArray = this.state.words.filter(e => e !== inputWord);
        let newArray2 = this.state.words2.filter(e => e !== inputWord);
        let newArray3 = this.state.words3.filter(e => e !== inputWord);
        let newArray4 = this.state.words4.filter(e => e !== inputWord);
        let newArray5 = this.state.words5.filter(e => e !== inputWord);
        let newArray6 = this.state.words6.filter(e => e !== inputWord);
        let newArray7 = this.state.words7.filter(e => e !== inputWord);
        let newArray8 = this.state.words8.filter(e => e !== inputWord);
        let newArray9 = this.state.words9.filter(e => e !== inputWord);
        let newArray10 = this.state.words10.filter(e => e !== inputWord);
        let newArray11 = this.state.words11.filter(e => e !== inputWord);
        let newArray12 = this.state.words12.filter(e => e !== inputWord);
        let newArray13 = this.state.words13.filter(e => e !== inputWord);
        let newArray14 = this.state.words14.filter(e => e !== inputWord);
        let newArray15 = this.state.words15.filter(e => e !== inputWord);
        let newArray16 = this.state.words16.filter(e => e !== inputWord);
            //If the word entered is correct as the word in the array. 
            //setState to the old array with the newArray to give the impression that word 
            //has been taken off the screen. 
            this.setState({
                    words: newArray,
                    words2: newArray2,
                    words3: newArray3,
                    words4: newArray4, 
                    words5: newArray5,
                    words6: newArray6,
                    words7: newArray7,
                    words8: newArray8,
                    words9: newArray9,
                    words10: newArray10,
                    words11: newArray11,
                    words12: newArray12,
                    words13: newArray13,
                    words14: newArray14,
                    words15: newArray15,
                    words16: newArray16,
                }) 
                //If statements for each correct word entered. Score is increased by 1.
                this.clearInput();
        if(this.state.words.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words2.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words3.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words4.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words5.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words6.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words7.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words8.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words9.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words10.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words11.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words12.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words13.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words14.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words15.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }
        if(this.state.words16.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }                          
    };
    componentDidMount () {
        this.setState({
          count: this.state.count
        })
        this.doIntervalChange();
        //fetch call
        this.wordsFetch();
      }
      // If statement timer change
      doIntervalChange = () => {
        this.interval = setInterval(
            () => {
              if(this.state.count > 0) {
                this.setState(prevState => ({
                  count: prevState.count - 1
                }))
              } else {
                clearInterval(this.interval)
                alert('GAME OVER' + '                                                                            ' + 'SCORE:' + this.state.score)
              }
            },
            1000
          )
      }
      componentWillUnmount () {
        clearInterval(this.interval)
      };
    render() { 
    return (
      <div className='container'>
            <div className ='container__words'>
                {this.state.words.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words2'>
                {this.state.words2.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words3'>
                {this.state.words3.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words4'>
                {this.state.words4.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words5'>
                {this.state.words5.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words6'>
                {this.state.words6.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words7'>
                {this.state.words7.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words8'>
                {this.state.words8.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words9'>
                {this.state.words9.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words10'>
                {this.state.words10.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words11'>
                {this.state.words11.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words12'>
                {this.state.words12.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words13'>
                {this.state.words13.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words14'>
                {this.state.words14.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words15'>
                {this.state.words15.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className ='container__words16'>
                {this.state.words16.map(item =>{
                    return <h1>
                                {item}
                            </h1>
                })}
            </div>
            <div className='score'>
                Score:{this.state.score}
            </div>
            <div className='timer'>
                Timer:{this.state.count}
            </div>
            <Link to={'/start'}>
                <button className='retry'>Try again</button>
            </Link>
            <div className='back'>
                <form className='search' onSubmit={(event)=>this.handlekey(event)} onChange={this.handleChange}>
                    <input className = 'textBar' type='text' autoFocus ref={this.input} value={this.state.input} />
                </form>
            </div>
      </div>
    )
  }
}




