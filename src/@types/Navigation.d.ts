export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined,
            Details: {
            data: {
                id: string;
                name: string;
                total_ingredients: string;
                time: string;
                cover: string;
                video: string;
                ingredients: [
                    id: string,
                    name: string,
                    amount: string,
                ];
                intructions: {
                    id: string;
                    text: string;
                  }
            },
            index: number,
            },
            Search: {
            name: string,
            },
        }
    }
}