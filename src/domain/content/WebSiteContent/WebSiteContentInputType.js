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

const WebSiteContentInputType = new GraphQLInputObjectType({
  name: 'WebSiteContentInputType',
  description: 'input type for WebSiteContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    webSiteContentTypeId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSiteContentInputType};
    