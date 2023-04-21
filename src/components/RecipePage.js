import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import { AiOutlinePrinter } from 'react-icons/ai';
import logohome from "../logohome.png";
import Picture1 from "../Picture1.png";
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {BsTrash3} from 'react-icons/bs';
import {CiEdit} from 'react-icons/ci';
import styles from '../css/RecipePage.css'

const RecipePage = () => {

    let params = useParams()
    let navigate = useNavigate()
    let token = localStorage.getItem('myRecipeToken')
    let currentUser = localStorage.getItem('userId')

    let { getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ oneRecipe, setOneRecipe ] = useState({
      recipeId: params.recipeId,
      userId: params.userId,
      recipe: "",
      instructions: "",
      ingredients: "",
      continent: "",
      image: "",
      country: "",
      servings: "",
      prepTime: "",
      cookTime: "",
      createdAt: Date
  })
  let { recipeId, userId, User, recipe, instructions, ingredients, continent, image, country, servings, prepTime, cookTime, createdAt} = oneRecipe

    useEffect(() => {
      async function fetch() {
        await getRecipe(recipeId)
          .then((recipe) => setOneRecipe(recipe))
      }
      fetch()
    }, [recipeId]);
        
  
    function handleDeleteRecipe(recipeId) {
      deleteRecipe(recipeId).then(() => {
        navigate(`/profile` );
      })
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
      }

    function recipeComponent() {
          if (token && currentUser == userId) {
            return (
              <div class="RPRecipePage px-4">
                <Button size="lg" variant="outline" onClick={() => [navigate(-1)]}><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>Go Back</Button>
                <div class="row align-items-center">
                  <div class="col-sm-12 col-md-6 p-3">
                    <div class="RPRecipeImg card w-75 mx-auto">
                      <img src={image} className="img-fluid rounded" alt="recipe"/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div className='RPRLinks d-flex justify-content-center'>
                      <p className='RPPrint-link'>
                      <Link class="text-secondary"to={`/edit/${recipeId}`}><CiEdit></CiEdit>Edit Recipe</Link> <Link class="text-secondary"onClick={handleDeleteRecipe.bind(this, recipeId)}><BsTrash3></BsTrash3>Delete Recipe</Link>
                    </p>
                    </div>                  
                    <h4 className='RPTitle'>{recipe}</h4>
                    <p className='RPContinent'>From {country}, {continent}</p><br></br>
                    <div className='RPPrint d-flex'>          
                      <p className='RPPrint-link'><Link class="text-secondary"to={`/print/${recipeId}`}><AiOutlinePrinter></AiOutlinePrinter>Printable Version</Link></p>
                    </div>
                    <div class='RPDecipeDetails card w-50 mx-auto mb-4'>
                    <ul class="list-group list-group-flush">
                      <li class="RPDetailsText list-group-item">Prep Time: {prepTime}</li>
                      <li class="RPDetailsText list-group-item">Cook Time: {cookTime}</li>
                      <li class="RPDetailsText list-group-item">Servings: {servings}</li>
                    </ul>
                    </div>
                    <h5 className='RPHeadings mb-2'>Ingredients</h5>
                    <ul>{ingredients.split(",").map((ingredient) => {
                      return (<li className='RPText'>{ingredient}</li>)
                    })}</ul>
                    <h5 className='RPHeadings'>Directions</h5>
                    <p className='RPText'>{instructions}</p>
                    <p className='RPUserLink'>Recipe added by <Link to={`/userprofile/${userId}`} >{User?.firstName} {User?.lastName}</Link> Created: {createdAt} </p>
                  </div>
                </div>
              </div>
        )
          } else if(token){
            return (
              <div class="RPRecipePage px-4">
                <Button size="lg" variant="outline" onClick={() => [navigate(-1)]}><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>Go Back</Button>
                <div class="row align-items-center">
                  <div class="col-sm-12 col-md-6 p-3">
                    <div class="RPRecipeImg card w-75 mx-auto">
                      <img src={image} className="img-fluid rounded" alt="recipe"/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <h4 className='RPTitleTwo'>{recipe}</h4>
                    <p className='RPContinent'>From {country}, {continent}</p><br></br>
                    <div className='RPPrint d-flex'>          
                      <p className='RPPrint-link'><Link class="text-secondary"to={`/print/${recipeId}`}><AiOutlinePrinter></AiOutlinePrinter>Printable Version</Link></p>
                    </div>
                    <div class='RPDecipeDetails card w-50 mx-auto mb-4'>
                    <ul class="list-group list-group-flush">
                      <li class="RPDetailsText list-group-item">Prep Time: {prepTime}</li>
                      <li class="RPDetailsText list-group-item">Cook Time: {cookTime}</li>
                      <li class="RPDetailsText list-group-item">Servings: {servings}</li>
                    </ul>
                    </div>
                    <h5 className='RPHeadings mb-2'>Ingredients</h5>
                    <ul>{ingredients.split(",").map((ingredient) => {
                      return (<li className='RPText'>{ingredient}</li>)
                    })}</ul>
                    <h5 className='RPHeadings'>Directions</h5>
                    <p className='RPText'>{instructions}</p>
                    <p className='RPUserLink'>Recipe added by <Link to={`/userprofile/${userId}`} >{User?.firstName} {User?.lastName}</Link> Created: {createdAt} </p>
                  </div>
                </div>
              </div>
              )
          } else {
            return (
              <div class="RPRecipePage px-4">
                <div class="row align-items-center ">
                  <div class="col-sm-12 col-md-6 p-3">
                    <div class="RPRecipeImg card w-50 mx-auto">
                    <img src={logohome}alt="logo" /><br></br>                   
                    <img src={Picture1}alt="logoname"/>                    
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <h1 className='RPErrorTitle'>Hey, good lookin! <br></br> What ya got cookin?</h1>
                    <h3 className='RPErrorBody'>Unfortunately, not this recipe. If you would like to make this recipe and many other delectable delights, feel free to sign up or login. We would love to have you!</h3><br></br>
                  </div>
                </div>            
              </div>
            )
          }
            
      }
    return  oneRecipe ? recipeComponent() : loading();
};

export default RecipePage;