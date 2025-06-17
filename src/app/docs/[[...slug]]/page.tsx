export default async function Docs({
    params,
}:{
    params: Promise<{ slug: string[] }>;
})
{
    const {slug} = await params;
    if(slug?.length ===2){
        return(
            <h1>Viewing docs for features {slug[0]} concept  {slug[1]}</h1>
        );
    }
    else if(slug?.length ===1){
        return <h1>Viewing docs   features  {slug[0] }</h1>
    }
    return <h1>Docs Home page</h1>
}