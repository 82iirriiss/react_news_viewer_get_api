import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  //화살표 함수에 async/await을 적용하면, async()=>{}의 형태가 된다.
  const onClick = async () => {
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=4e6383d4fa3542f59e5d90a0a6abeafd',);
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;