import React from "react";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
const Button = (props) => (
  <i class="fa-solid fa-compress" {...props.getTriggerProps()}></i>
);

const Card = ({ propsPoster }) => {
  const { modalProps, getTriggerProps } = useModal();
  return (
    <div className="card">
      <img
        src={"http://localhost:8055/assets/" + propsPoster.PosterImage}
        alt={propsPoster.Titre}
      />
      <h2>{propsPoster.Title}</h2>
      <h5>Sorti le : {propsPoster.Release_date}</h5>
      <ul>
        {propsPoster.Categories.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
      <h3>Description</h3>
      <p>{propsPoster.Description}</p>
      {/* <div className='btn'>Ajouter aux Favoris</div> */}
      <i class="fa-solid fa-arrows-maximize"></i>

      <div className="btn">
        <a
          className="downPost"
          href={
            "http://localhost:8055/assets/" +
            propsPoster.PosterImage +
            "?download"
          }
        >
          <i class="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="btn2">
        <Button getTriggerProps={getTriggerProps} />
        
      </div>
      <div className="btn3">
        <i class="fa-solid fa-heart"></i>
      </div>
      <Modal {...modalProps} >
          <img
            className="imgModale"
            src={"http://localhost:8055/assets/" + propsPoster.PosterImage}
            alt={propsPoster.Titre}
          />
        </Modal>
    </div>
  );
};

export default Card;
