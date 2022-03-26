import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import Landing_ from '../Components/Page_Metarial/Landing_';
import Metarial_Subject from '../Components/Page_Metarial/Metarial_Subject';

const Metarial_Page = () => {

  return (
    <div>
      <Landing_ />
      <Metarial_Subject />
    </div>
  )
}

export default Metarial_Page