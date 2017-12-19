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

const AddressMatchMapInputType = new GraphQLInputObjectType({
  name: 'AddressMatchMapInputType',
  description: 'input type for AddressMatchMap',

  fields: () => ({
    mapKey: {type: GraphQLString},
    mapValue: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {AddressMatchMapInputType};
    