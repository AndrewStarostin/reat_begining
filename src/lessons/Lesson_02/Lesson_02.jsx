import Button from '../../components/Button/Button';
import { animal,getPlanteaterStatus } from './data';
import "./styles.css"; 

function Lesson_02() {
  console.log(animal);
  console.log(animal.fullName);



  return (
    <div className="lesson02_wrapper">
    <div className="animal_card">
      <p className="card_title">Animal Card: {animal.type}</p>
      < img className="avatar" src = {animal.avatarURL} alt="animal avatar" />
      <p className="card_info">Name: {animal.fullName}</p>
      
      <p className="card_info">Age:{animal.age}</p>
      <p className="card_info">Color:{animal.color}</p>
      <p className="card_info">is Planteater:{animal.isPlanteater ? "Yes": "No"}</p>
      <p className="card_info">is Planteater:{getPlanteaterStatus(animal.isPlanteater)}</p>
      <Button />
    </div>
    </div>
  );
}

export default Lesson_02;
