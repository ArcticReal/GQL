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

const DataResourceResponseType = new GraphQLObjectType({
  name: 'DataResourceResponseType',
  description: 'response type for DataResource',

  fields: () => ({
    characterSetId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    dataCategoryId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString},
    dataResourceName: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    dataTemplateTypeId: {type: GraphQLString},
    isPublic: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    localeString: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    objectInfo: {type: GraphQLString},
    relatedDetailId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString}
  })
});

export {DataResourceResponseType};
    