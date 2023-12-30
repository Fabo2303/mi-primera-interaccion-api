export type Location = {
    info:    Info;
    results: Result[];
}

export type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export type Result = {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}
