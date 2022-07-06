import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/students/StudentList";
import StudentDetail from "./components/students/Detail";
import BookList from "./components/books/BookList";
import BookDetail from "./components/books/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StudentList />} />
        <Route exact path="/student/detail/:id" element={<StudentDetail />} />
        <Route exact path="/books" element={<BookList />} />
        <Route exact path="/book/detail/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
