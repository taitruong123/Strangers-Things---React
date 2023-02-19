import React from "react";
import { createRoot } from 'react-dom/client';

const app = () => {
    return (
        <h1>Strangers Things React</h1>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// export 