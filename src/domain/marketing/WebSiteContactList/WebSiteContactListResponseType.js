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

const WebSiteContactListResponseType = new GraphQLObjectType({
  name: 'WebSiteContactListResponseType',
  description: 'response type for WebSiteContactList',

  fields: () => ({
    contactListId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSiteContactListResponseType};
    