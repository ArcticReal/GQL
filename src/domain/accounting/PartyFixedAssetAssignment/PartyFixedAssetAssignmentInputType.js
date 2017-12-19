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

const PartyFixedAssetAssignmentInputType = new GraphQLInputObjectType({
  name: 'PartyFixedAssetAssignmentInputType',
  description: 'input type for PartyFixedAssetAssignment',

  fields: () => ({
    allocatedDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyFixedAssetAssignmentInputType};
    