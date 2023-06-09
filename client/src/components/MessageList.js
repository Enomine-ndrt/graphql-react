
import { useQuery, gql } from '@apollo/client';

export const GET_MESSAGES = gql`
          {
            messages{
                _id
                title
                content
                author
            }
        }
`;

const MessageList = ()=>{
  const {loading,error,data} =  useQuery(GET_MESSAGES);

  if (loading) return <p>Loading messages...</p>
  if(error){
    return <p>Error</p>
  }

  console.log(data);
    return(
        <div className="roow">
            <div className='col-md-6 offset-md-3'>
              {
                data.messages.map(({_id,title,content,author}) => {
                  return(<div key={_id} className='card m-2'>
                    <div className='card-body'>
                        <h4>{title}</h4>
                        <p>{content}</p>
                        <p>{author}</p>
                    </div>
                  </div>)
                })
              }
            </div>
        </div>
        );
};
export default MessageList;
