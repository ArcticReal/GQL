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

const PicklistBinInputType = new GraphQLInputObjectType({
  name: 'PicklistBinInputType',
  description: 'input type for PicklistBin',

  fields: () => ({
    binLocationNumber: {type: GraphQLInt},
    picklistBinId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    primaryOrderId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString}
  })
});

export {PicklistBinInputType};
    