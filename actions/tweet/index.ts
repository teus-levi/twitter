import { create } from "./create";

export interface Tweet {
    id: string;
    content: string;
    created_at: string;
    updated_at: string;
    userId: string;
}

export default {
    create
}