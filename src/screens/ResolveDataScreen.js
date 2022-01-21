import React, { useEffect, useContext } from 'react';
import { Context as DataContext } from '../context/DataContext';

const ResolveDataScreen = () => {
  const { tryDesign } = useContext(DataContext);

  useEffect(() => {
    tryDesign();
  }, []);

  return null;
};

export default ResolveDataScreen;
