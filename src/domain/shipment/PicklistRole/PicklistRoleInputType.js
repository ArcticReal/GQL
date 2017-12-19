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

const PicklistRoleInputType = new GraphQLInputObjectType({
  name: 'PicklistRoleInputType',
  description: 'input type for PicklistRole',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    partyId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PicklistRoleInputType};
    