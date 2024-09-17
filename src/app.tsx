import {Suspense} from "solid-js";
import "./app.css";
import {FileRoutes} from '@solidjs/start/router';
import {Router} from '@solidjs/router';

export default function App() {
  return (
    <main>
        <Router root={props => <Suspense>{props.children}</Suspense>}>
            <FileRoutes />
        </Router>
    </main>
  );
}
