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

const WebSiteRoleResponseType = new GraphQLObjectType({
  name: 'WebSiteRoleResponseType',
  description: 'response type for WebSiteRole',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSiteRoleResponseType};
    