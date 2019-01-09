import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Page.scss';
export default class Page extends Component {
    constructor(){
        super();
        this.input = React.createRef();
        this.state = { 
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
            input: '',
            score:0,
            count: 9999,
        }
    };
    wordsFetch = () => {
        Promise.all([
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
        .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, ]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json(), res10.json()]))
        .then(([data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, ]) => this.setState({
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
        }));
    }
    handleChange = (e) =>{
        this.setState({
            input:e.target.value
        })
    };
    clearInput= () => {
        this.setState({
            input:''
        })
    };
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
        let newArray10 = this.state.words9.filter(e => e !== inputWord);
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
                }) 
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
    };
    componentDidMount () {
        this.setState({
          count: this.state.count
        })
        this.doIntervalChange();
        //fetch call
        this.wordsFetch();
      }
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
            <div className='score'>
                Score:{this.state.score}
            </div>
            <div className='timer'>
                Timer:{this.state.count}
            </div>
            <form className='search' onSubmit={(event)=>this.handlekey(event)} onChange={this.handleChange}>
                <input className = 'textBar' type ="reset" type='text' ref={this.input} value={this.state.input} />
            </form>
            <Link to={'/start'}>
                <button className='retry'>Try again</button>
            </Link>
            <div className='back'>
            </div>
      </div>
    )
  }
}

{/* <div className ='container__words'>
                {this.state.words.map(item =>{
                    return <h1 className = {item}>
                                {item}
                            </h1>
                })}
            </div>   */}




