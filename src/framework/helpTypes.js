import {
  GraphQLList,
  GraphQLString,
  GraphQLInputType
} from 'graphql';

const KeyValueType = new GraphQLInputType({
  name: 'KeyValueType',
  description: 'this is a type to define key-value pairs',
  fields: () => ({
    key: {type: GraphQLString},
    value: {type: GraphQLString}
  })
});

export {KeyValueType};
