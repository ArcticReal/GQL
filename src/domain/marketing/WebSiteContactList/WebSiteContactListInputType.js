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

const WebSiteContactListInputType = new GraphQLInputObjectType({
  name: 'WebSiteContactListInputType',
  description: 'input type for WebSiteContactList',

  fields: () => ({
    contactListId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSiteContactListInputType};
    