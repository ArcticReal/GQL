
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



const AddressMatchMapType = new GraphQLObjectType({
  name: 'AddressMatchMapType',
  description: 'Type for AddressMatchMap in party',

  fields: () => ({
    mapValue: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    mapKey: {type: GraphQLString}
  })
});

export {AddressMatchMapType};
    