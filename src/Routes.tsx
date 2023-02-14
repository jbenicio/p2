import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { CreateMessage } from "./Message/Create";
import { EditMessage } from "./Message/Edit";
import { ListMessage } from "./Message/List";
import { CreateNegociation } from "./Negociation/Create";
import { DetailsNegociation } from "./Negociation/Details";
import { EditNegotiation } from "./Negociation/Edit";
import { ListNegociation } from "./Negociation/List";
import { User } from "./User";

const RouteConfig = () => {
   
    return (
            
    <BrowserRouter>
        <Routes>

            <Route path="/"  element = {<Home />}/>
            <Route path="/about" element = {<About />} />
            <Route path="/user" element = {<User />} />

            {/* Negociation Routes */}
            <Route path="/negociation/create" element = {<CreateNegociation />} />
            <Route path="/negociation/details/:id" element = {<DetailsNegociation />} />
            <Route path="/negociation/edit/:id" element = {<EditNegotiation />} />
            <Route path="/negociation" element = {<ListNegociation />} />

            {/* Message Routes */}
            <Route path="/message/create" element = {<CreateMessage />} />
            <Route path="/message/edit/:id" element = {<EditMessage />} />
            <Route path="/message" element = {<ListMessage />} />
        </Routes>
    </BrowserRouter>
       
   )

}

export default RouteConfig;