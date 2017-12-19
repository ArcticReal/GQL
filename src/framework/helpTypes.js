import {
  GraphQLList,
  GraphQLString,
  GraphQLInputObjectType
} from 'graphql';

const KeyValueType = new GraphQLInputObjectType({
  name: 'KeyValueType',
  description: 'this is a type to define key-value pairs',
  fields: () => ({
    key: {type: GraphQLString},
    value: {type: GraphQLString}
  })
});

export {KeyValueType};
