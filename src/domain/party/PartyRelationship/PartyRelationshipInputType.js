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

const PartyRelationshipInputType = new GraphQLInputObjectType({
  name: 'PartyRelationshipInputType',
  description: 'input type for PartyRelationship',

  fields: () => ({
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    partyRelationshipTypeId: {type: GraphQLString},
    permissionsEnumId: {type: GraphQLString},
    positionTitle: {type: GraphQLString},
    priorityTypeId: {type: GraphQLString},
    relationshipName: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    securityGroupId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyRelationshipInputType};
    