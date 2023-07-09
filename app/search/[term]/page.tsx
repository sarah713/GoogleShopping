import { SearchParams } from "@/typing";
import { redirect } from "next/navigation";

type Props = {
    searchParams: SearchParams;
    params: {
        term: string;
    }
}
function SearchPage({ searchParams, params: { term } }: Props) {
    if (!term) {
        redirect('/');
    }
    // fetch from API
    return (
        <div>

        </div>
    )
}

export default SearchPage;