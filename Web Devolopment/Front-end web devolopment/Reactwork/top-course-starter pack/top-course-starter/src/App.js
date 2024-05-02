import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";

const App = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("All");

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const output = await res.json();
            setCourses(output.data);
        } catch (error) {
            toast.error("Something Went Wrong");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-bgDark2">
            <Navbar />
            <div className="bg-bgDark2">
                <Filter filterData={filterData} category={category} setCategory={setCategory} />
                <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
                    {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
                </div>
            </div>
        </div>
    );
};

export default App;
