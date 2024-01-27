import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {CircleLoader} from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function HashLoader() {

    return (
        <div className="row justify-content-center text-center py-5">
            <CircleLoader color="#282930" />
        </div>
    );
}

export default HashLoader;