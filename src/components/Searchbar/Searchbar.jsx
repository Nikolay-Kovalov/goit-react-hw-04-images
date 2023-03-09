import {toast} from "react-hot-toast";
import { ButtonLabel, Form, Header, SearchButton, SearchFormInput } from "./Searchbar.styled"
import PropTypes from 'prop-types'
import { useState } from "react";

export const Searchbar = ({onSubmit}) => {

  const [searchQuerry, setSearchQuerry] = useState('')
    
   const setToastAlert = () => {
       const notify = () => toast('Введите пожалуйста Ваш запрос', {  position: 'top-right', style: {backgroundColor: 'red', color: 'white'}});
      return notify()
  }
   const onChange = (evt) => {
        setSearchQuerry(evt.currentTarget.value )
    }

    const onFormSubmit = (evt) => {
      evt.preventDefault()
      if (searchQuerry.trim() === '') {
        setToastAlert()
        return
      }
        onSubmit(searchQuerry)
        setSearchQuerry('')
    }
  
        return (
        <Header >
  <Form onSubmit={onFormSubmit}>
                    <SearchButton type="submit">
      <ButtonLabel>Search</ButtonLabel>
    </SearchButton>

    <SearchFormInput
    type="text"
    value={searchQuerry}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={onChange}                 
    />
  </Form>
</Header>
    )
   
}



// export class Searchbar extends Component {

//     state = {
//         searchQuerry: ''
//     }
    
//    setToastAlert = () => {
//        const notify = () => toast('Введите пожалуйста Ваш запрос', {  position: 'top-right', style: {backgroundColor: 'red', color: 'white'}});
//       return notify()
//   }
//     onChange = (evt) => {
//         this.setState({ searchQuerry: evt.currentTarget.value })
//     }

//     onFormSubmit = (evt) => {
//       evt.preventDefault()
//       if (this.state.searchQuerry.trim() === '') {
//         this.setToastAlert()
//         return
//       }
//         this.props.onSubmit(this.state.searchQuerry)
//         this.setState({searchQuerry: ''})
//     }

//   render() {
//     const { searchQuerry } = this.state
//         return (
//         <Header >
//   <Form onSubmit={this.onFormSubmit}>
//                     <SearchButton type="submit">
//       <ButtonLabel>Search</ButtonLabel>
//     </SearchButton>

//     <SearchFormInput
//     type="text"
//     value={searchQuerry}
//       autocomplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//       onChange={this.onChange}                 
//     />
//   </Form>
// </Header>
//     )}
   
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
