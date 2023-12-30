export type Episode = {
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
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
