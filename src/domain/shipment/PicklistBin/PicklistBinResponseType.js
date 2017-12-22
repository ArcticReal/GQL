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

const PicklistBinResponseType = new GraphQLObjectType({
  name: 'PicklistBinResponseType',
  description: 'response type for PicklistBin',

  fields: () => ({
    binLocationNumber: {type: GraphQLInt},
    picklistBinId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    primaryOrderId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString}
  })
});

export {PicklistBinResponseType};
    