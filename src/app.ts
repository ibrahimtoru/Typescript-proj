// Important! webpack config is not accepting output config.

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
