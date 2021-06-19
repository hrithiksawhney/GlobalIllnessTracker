import React from 'react';
import './SelectButton.css';

function SelectButton(props) {

  let click = disabled => {
    if(disabled) return;
    let illness = props.illness;

    let covid = document.getElementsByClassName('illness_covid_19');
    let hivaids = document.getElementsByClassName('illness_hiv_aids');
    let flu = document.getElementsByClassName('illness_flu');

    if(covid.length > 0) covid[0].classList.remove('isSelected');
    if(hivaids.length > 0) hivaids[0].classList.remove('isSelected');
    if(flu.length > 0) flu[0].classList.remove('isSelected');

    if(illness === 'covid_19') covid[0].classList.add('isSelected');
    if(illness === 'hiv_aids') hivaids[0].classList.add('isSelected');
    if(illness === 'flu') flu[0].classList.add('isSelected');

    fetch(`/api/${illness}`)
      .then(res => res.json())
      .then(data => props.states.setData(data))
      .catch(() => props.states.setData({error: 'Could not load an API response.'}));
  }

  if(props.illness) {
    if(props.illness === 'covid_19') {
      return (
        <div className={`selectButton selectFirst isSelected illness_${props.illness}`} onClick={() => click()}>
          COVID-19
        </div>
      )
    } else if(props.illness === 'hiv_aids') {
      return (
        <div className={`selectButton illness_${props.illness}`} onClick={() => click(true)}>
          HIV/AIDS
        </div>
      )
    } else if(props.illness === 'hepatitis_all') {
      return (
        <div className="selectDropdown">
          <span className="selectDropdown_title">Hepatitis</span>
          <div className="selectDropdown_items">
            <span className="selectDropdown_item">...</span>
          </div>
        </div>
      )
    } else if(props.illness === 'flu' ) {
      return (
        <div className={`selectButton illness_${props.illness}`} onClick={() => click(true)}>
          Flu
        </div>
      )
    } else if(props.illness === 'more') {
      return (
        <div className="selectDropdown selectLast">
          <span className="selectDropdown_title">More</span>
          <div className="selectDropdown_items">
            <span className="selectDropdown_item">...</span>
          </div>
        </div>
      )
    }
  } else {
   return (
      <div className="selectButton"></div>
    );
  }
}

// class SelectButton extends React.Component {
//   handleClick = (isSelected, setSelected) => {
//     let props = this.props;

//     if(isSelected) return;
//     else {
//       let list = document.getElementsByClassName('isSelected');
//       if(list.length > 0) list[0].classList.remove('isSelected');
//       setSelected(true);
 
//       let setData = props.states.setData;
//       let illness = props.illness;
  
//       fetch(`/api/${illness}`)
//         .then(res => res.json())
//         .then(data => setData(data))
//         .catch(() => setData({error: 'Could not load an API response.'}));
//     }
//   }

//   render() {

//     const [isSelected, setSelected] = useState("false");
//     const click = this.handleClick(isSelected, setSelected);

//     let props = this.props;
//     if(props.illness) {
//       if(props.illness === 'covid_19') {
//         return (
//           <div className={this.isActive ? "selectButton selectFirst isSelected" : "selectButton selectFirst"} onClick={click}>
//             COVID-19
//           </div>
//         )
//       } else if(props.illness === 'hiv_aids') {
//         return (
//           <div className={this.isActive ? "selectButton isSelected" : "selectButton"} onClick={click}>
//             HIV/AIDS
//           </div>
//         )
//       } else if(props.illness === 'hepatitis_all') {
//         return (
//           <div className="selectDropdown">
//             <span className="selectDropdown_title">Hepatitis</span>
//             <div className="selectDropdown_items">
//               <span className="selectDropdown_item">...</span>
//             </div>
//           </div>
//         )
//       } else if(props.illness === 'flu' ) {
//         return (
//           <div className={this.isActive ? "selectButton isSelected" : "selectButton"} onClick={click}>
//             Flu
//           </div>
//         )
//       } else if(props.illness === 'more') {
//         return (
//           <div className="selectDropdown selectLast">
//             <span className="selectDropdown_title">More</span>
//             <div className="selectDropdown_items">
//               <span className="selectDropdown_item">...</span>
//             </div>
//           </div>
//         )
//       }
//     } else {
//       return (
//         <div className="selectButton"></div>
//       );
//     }
//   }
// }

export default SelectButton;