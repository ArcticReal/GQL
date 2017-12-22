import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const AddressMatchMapResponseType = new GraphQLObjectType({
  name: 'AddressMatchMapResponseType',
  description: 'response type for AddressMatchMap',

  fields: () => ({
    mapKey: {type: GraphQLString},
    mapValue: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {AddressMatchMapResponseType};
    