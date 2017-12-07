
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureDataResourceType} from '../product/ProductFeatureDataResourceType.js';
import {DataResourceMetaDataType} from '../content/DataResourceMetaDataType.js';
import {DataCategoryType} from '../content/DataCategoryType.js';
import {ElectronicTextType} from '../content/ElectronicTextType.js';
import {DataResourceAttributeType} from '../content/DataResourceAttributeType.js';
import {DataResourceRoleType} from '../content/DataResourceRoleType.js';
import {SurveyResponseType} from '../content/SurveyResponseType.js';
import {DataResourcePurposeType} from '../content/DataResourcePurposeType.js';
import {VideoDataResourceType} from '../content/VideoDataResourceType.js';
import {ContentRevisionItemType} from '../content/ContentRevisionItemType.js';
import {SurveyType} from '../content/SurveyType.js';
import {AudioDataResourceType} from '../content/AudioDataResourceType.js';
import {ContentType} from '../content/ContentType.js';
import {DataTemplateTypeType} from '../content/DataTemplateTypeType.js';
import {DataResourceTypeType} from '../content/DataResourceTypeType.js';
import {OtherDataResourceType} from '../content/OtherDataResourceType.js';
import {CharacterSetType} from '../content/CharacterSetType.js';
import {ImageDataResourceType} from '../content/ImageDataResourceType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const DataResourceType = new GraphQLObjectType({
  name: 'DataResourceType',
  description: 'Type for DataResource in content',

  fields: () => ({
    dataResourceName: {type: GraphQLInt},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`surveys/find?surveyId=${dataResource.surveyId}`)
    },
    dataTemplateType: {
      type: DataTemplateTypeType,
      args : {dataTemplateTypeId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`dataTemplateTypes/find?dataTemplateTypeId=${dataResource.dataTemplateTypeId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    dataCategory: {
      type: DataCategoryType,
      args : {dataCategoryId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`dataCategorys/find?dataCategoryId=${dataResource.dataCategoryId}`)
    },
    surveyResponse: {
      type: SurveyResponseType,
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`surveyResponses/find?surveyResponseId=${dataResource.surveyResponseId}`)
    },
    characterSet: {
      type: CharacterSetType,
      args : {characterSetId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`characterSets/find?characterSetId=${dataResource.characterSetId}`)
    },
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${dataResource.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    localeString: {type: GraphQLString},
    relatedDetailId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString},
    isPublic: {type: GraphQLBoolean},
    objectInfo: {type: GraphQLString},
    dataResourceType: {
      type: DataResourceTypeType,
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`dataResourceTypes/find?dataResourceTypeId=${dataResource.dataResourceTypeId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${dataResource.createdByUserLogin}`)
    },
    imageDataResource: {
      type: new GraphQLList(ImageDataResourceType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`imageDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    productFeatureDataResource: {
      type: new GraphQLList(ProductFeatureDataResourceType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`productFeatureDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourceAttribute: {
      type: new GraphQLList(DataResourceAttributeType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`dataResourceAttributes/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    content: {
      type: new GraphQLList(ContentType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`contents/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    otherDataResource: {
      type: new GraphQLList(OtherDataResourceType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`otherDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    content: {
      type: new GraphQLList(ContentType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`contents/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    electronicText: {
      type: new GraphQLList(ElectronicTextType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`electronicTexts/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourceMetaData: {
      type: new GraphQLList(DataResourceMetaDataType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`dataResourceMetaDatas/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    contentRevisionItem: {
      type: new GraphQLList(ContentRevisionItemType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`contentRevisionItems/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourcePurpose: {
      type: new GraphQLList(DataResourcePurposeType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`dataResourcePurposes/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    contentRevisionItem: {
      type: new GraphQLList(ContentRevisionItemType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`contentRevisionItems/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourceRole: {
      type: new GraphQLList(DataResourceRoleType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`dataResourceRoles/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    audioDataResource: {
      type: new GraphQLList(AudioDataResourceType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`audioDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    videoDataResource: {
      type: new GraphQLList(VideoDataResourceType),
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`videoDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    }
  })
});

export {DataResourceType};
    