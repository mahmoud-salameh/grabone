import React from "react";

import AdList from '../adds/AdList';

import Search from '../Drobdownlist/Search';
import SideBar from '../Drobdownlist/SideBar';
import PhoneBar from '../Phone/PhoneBar';
import PhoneList from '../Phone/PhoneList';
import { categories, discover} from '../../Data/data';



function Home() {
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown_btn') && !event.target.matches('.over_li')) {
      var dropdowns = document.getElementsByClassName("overlay");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]; 
        openDropdown.style.display = "none";
      }
    }
  }
  function discoverShow() {
    const show = discover.map((x,i) => {
      return (
        <AdList key={i} title={x.name} />
      );
    });
    return show;
  }
  return (
    <div>

    {discoverShow()}

    <div key={1} id="search" className='over_slide'>
      <Search />
     </div>

     <div key={2} id="categories" className='over_slide'>
       <PhoneList key={"111"} title="Browse Categories" items={categories} />
     </div>

     <div key={3} id="cart" className='over_slide'></div>

     <div key={4} id="account" className='over_slide'>
       
       <SideBar items={[{name: "My Purchases", icon: "fas fa-box"},
         {name: "My Cart", icon: "fas fa-shopping-cart"},
         {name: "My Subscriptions", icon: "far fa-comment-alt"},
         {name: "My Profile", icon: "far fa-user"},
         {name: "Gifts", icon: "fas fa-gift"},
         {name: "Login", icon: "fas fa-sign-in-alt"}]} title=""/>
     </div>
    <PhoneBar items={
      [
        {text: "home", icon:"fas fa-home"},
        {text: "search", icon:"fas fa-search"},
        {text: "categories", icon:'fas fa-border-all'},
        {text: "cart", icon:'fas fa-shopping-cart'},
        {text: "account", icon:'far fa-user'}
   ]} />
     </div>
  );
}

export default Home;
