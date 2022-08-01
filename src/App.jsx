import React, { useState, Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { db } from "./utils/firebase.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import "./App.css";

const request = collection(db, "usuarios");
const request1 = query(collection(db, "usuarios"));

function App() {
  const [todos, setTodos] = useState([]);

  useEffect( ()=>{
    getData();

  }, []);

  // const getDataSnapshot = () =>{
  //   onSnapshot(request1, (snap)=>{
  //     setTodos(snap.docs.map(data => data.data()));
  //   })
  // }

  const getData = async()=>{
    const response = await getDocs(request);
    const list = response.docs.map((doc) => doc.data());
    setTodos(list);
  }
 
  console.log('todos', todos);
  return (
    <>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Prueba 1
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Prueba 2
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </Popover>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>


      <br />
      <br />

      <ul>
          {todos.map((val, index)=> <li   key={index + 1}>{val.nombre}</li>)}
      </ul>
    </>
  );
}

export default App;
