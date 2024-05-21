import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import {Header} from "./components/Header/Header";
import {Route, Routes, Router} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, []);


  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'/form'} element={<Form />}/>
        </Routes>

        </Header>
    </div>
  );
}

export default App;
