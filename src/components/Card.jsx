import React from "react";
import "./Card.css";
import cardColor from "./Card_colors.module.css";

function Card({ details }) {
  const pokemonId = String(details?.id).padStart(3, "0");

  return (
    <>
      <div className="container">
        <div className="card-1 card-div">
          <div
            className={`${
              details.types[0].type?.name === "grass"
                ? cardColor.grass
                : details.types[0].type?.name === "fire"
                ? cardColor.fire
                : details.types[0].type?.name === "water"
                ? cardColor.water
                : details.types[0].type?.name === "electric"
                ? cardColor.electric
                : details.types[0].type?.name === "bug"
                ? cardColor.bug
                : details.types[0].type?.name === "normal"
                ? cardColor.normal
                : details.types[0].type?.name === "poison"
                ? cardColor.poison
                : details.types[0].type?.name === "ground"
                ? cardColor.ground
                : details.types[0].type?.name === "fairy"
                ? cardColor.fairy
                : details.types[0].type?.name === "fighting"
                ? cardColor.fighting
                : details.types[0].type?.name === "psychic"
                ? cardColor.psychic
                : details.types[0].type?.name === "rock"
                ? cardColor.rock
                : details.types[0].type?.name === "ghost"
                ? cardColor.ghost
                : details.types[0].type?.name === "steel"
                ? cardColor.steel
                : details.types[0].type?.name === "ice"
                ? cardColor.ice
                : details.types[0].type?.name === "dark"
                ? cardColor.dark
                : details.types[0].type?.name === "dragon"
                ? cardColor.dragon
                : details.types[0].type?.name === "flying"
                ? cardColor.flying
                : cardColor.default
            } like-icon-div`}
          >
            <label for="card-1-like" className="like-icon-div-child">
              <input type="checkbox" id="card-1-like" />
              <i className="far fa-heart heart-empty"></i>
              <i className="fas fa-heart heart-fill"></i>
            </label>
          </div>

          <div
            className={`${
              details.types[0].type?.name === "grass"
                ? cardColor.grass
                : details.types[0].type?.name === "fire"
                ? cardColor.fire
                : details.types[0].type?.name === "water"
                ? cardColor.water
                : details.types[0].type?.name === "electric"
                ? cardColor.electric
                : details.types[0].type?.name === "bug"
                ? cardColor.bug
                : details.types[0].type?.name === "normal"
                ? cardColor.normal
                : details.types[0].type?.name === "poison"
                ? cardColor.poison
                : details.types[0].type?.name === "ground"
                ? cardColor.ground
                : details.types[0].type?.name === "fairy"
                ? cardColor.fairy
                : details.types[0].type?.name === "fighting"
                ? cardColor.fighting
                : details.types[0].type?.name === "psychic"
                ? cardColor.psychic
                : details.types[0].type?.name === "rock"
                ? cardColor.rock
                : details.types[0].type?.name === "ghost"
                ? cardColor.ghost
                : details.types[0].type?.name === "steel"
                ? cardColor.steel
                : details.types[0].type?.name === "ice"
                ? cardColor.ice
                : details.types[0].type?.name === "dark"
                ? cardColor.dark
                : details.types[0].type?.name === "dragon"
                ? cardColor.dragon
                : details.types[0].type?.name === "flying"
                ? cardColor.flying
                : cardColor.default
            } img-div `}
          >
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`}
              alt={details?.name}
            />
          </div>
          <div className="text-container">
            <h2 className="item-name">{details?.name}</h2>
            <div className="stats">
              {details?.stats &&
                details?.stats.map((stat) => (
                  <p key={Math.random()} className="date">
                    {stat?.stat?.name + ":" + stat?.base_stat}
                  </p>
                ))}
            </div>

            <div className="pricing-and-cart">
              {details?.types &&
                details?.types.map((type) => (
                  <p key={Math.random()} className="current-price">
                    {type?.type?.name}
                  </p>
                ))}
            </div>
            <h5>{details?.id}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
