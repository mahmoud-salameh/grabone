import React from 'react';

import DropdownList from '../Drobdownlist/DropdownLlst';
import LinksBar from '../Drobdownlist/LinksBar';
import DropdownListOfList from '../Drobdownlist/DropdownListOfList';
import Search from '../Drobdownlist/Search';



import {discover ,categories, primaryLinks, primaryDropList} from '../../Data/data';

import SideBar from "../Drobdownlist/SideBar"
import AdCarde from "../adds/AdCard"


function Header() {

    
  return (
    <>
    
     <div  className='primary_nav'>
            <div className="content " > 
                <div className="logo">
                    <a href="https://new.grabone.co.nz">
                        GrabOne
                    </a>
                </div>
                <DropdownList title={[<i key={111} className="fas fa-map-marker-alt"></i>, "Auckland"]} items={primaryDropList}/>
                <div className='phone_hed'>
                    <LinksBar items={primaryLinks}/> 
                </div> 
            </div> 
        </div>

    <div className='secondary_nav phone_hed'>
        <div className='content'> 
            <LinksBar items={[
            <DropdownListOfList key={111} title="Browse Categories" items={categories} />,
            {value: "What's New",url:"#" },{value: "Trending",url:"#" },{value: "For You",url:"#" }]}/>
            <Search />
        </div> 
    </div>
    <div className='ad_bord'>
        <img src='https://mediacdn.grabone.co.nz/asset/q7KV8t0zNm' alt=''/>
      </div>
     <div className='container flex'>
       <div className='phone_hed'>
         <SideBar items={discover} title="Discover" /> 
       </div>
       <div className='adds_big'>
       <AdCarde ad = {{id: 1,title: "Hair Regrowth Treatment incl.Scalp Massage ",text: "Full Head of Highlights incl. Colour-Lock Treatment, Toner, Shampoo Service, Head Massage, Style Cut & Blow Dry Finish",vendor: "Full Head of Highlights Package & Style Cut",location: "Vivo Hair and Skin Clinic",price: 350,sale: 195,image: "project-hair.jpg",bought: 155}} />
       <AdCarde ad = {{id: 2,title: "Hair Regrowth Treatment incl.Scalp Massage ",text: "Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa & Fitness Centre, Parking & Late Checkout - Options to Stay in the...",vendor: "Cordis",location: "Auckland",price: 580,oferprise: 279,image: "houses.jpg",bought: 476}} />
       </div>
     </div>
    </>
  );
}

export default Header;
