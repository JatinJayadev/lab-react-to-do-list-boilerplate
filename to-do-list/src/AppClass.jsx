import { Component } from 'react'

export class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            storeArray: []
        }
    }

    handleReadInput = (e) => {
        let settingValue = {
            inputValue: e.target.value
        }

        this.setState(settingValue)
    }

    handleAddBtn = () => {
        let previousStoredArray = this.state.storeArray
        let newInputValue = this.state.inputValue

        let newArray = [...previousStoredArray, newInputValue]

        let settingState = {
            storeArray: newArray
        }

        this.setState(settingState)
    }

    handleUpdateBtn(index) {
        let updatedSentence = prompt("Enter new todo...")


    }
    render() {
        console.log(this.state)
        return (
            <div className="container">
                <h1>To-Do</h1>

                <input type="text" placeholder='Enter your todo...'
                    onChange={this.handleReadInput} />

                <button onClick={this.handleAddBtn} >Add Todo</button>

                {
                    this.state.storeArray.map((element, index) => {
                        return (
                            <div key={index}>
                                <h1>{element}</h1>

                                <button
                                    onClick={() => { handleUpdateBtn(index) }}>
                                    Update
                                </button>

                                <button>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default AppClass