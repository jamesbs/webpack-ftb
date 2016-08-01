let v = 'var hasn\'t been set';
console.log('var value is', v);
//console.log('module outputting to server!');
v = 'var has been set';
module.exports = {
  v: v
};