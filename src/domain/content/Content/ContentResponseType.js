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

const ContentResponseType = new GraphQLObjectType({
  name: 'ContentResponseType',
  description: 'response type for Content',

  fields: () => ({
    characterSetId: {type: GraphQLString},
    childBranchCount: {type: GraphQLInt},
    childLeafCount: {type: GraphQLInt},
    contentId: {type: GraphQLString},
    contentName: {type: GraphQLString},
    contentTypeId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    customMethodId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    decoratorContentId: {type: GraphQLString},
    description: {type: GraphQLString},
    instanceOfContentId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    localeString: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    ownerContentId: {type: GraphQLString},
    privilegeEnumId: {type: GraphQLString},
    serviceName: {type: GraphQLString},
    statusId: {type: GraphQLString},
    templateDataResourceId: {type: GraphQLString}
  })
});

export {ContentResponseType};
    