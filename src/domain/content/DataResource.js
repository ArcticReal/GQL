
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

import {ProductFeatureDataResourceType} from '../product/ProductFeatureDataResource.js';
import {DataResourceMetaDataType} from '../content/DataResourceMetaData.js';
import {DataCategoryType} from '../content/DataCategory.js';
import {ElectronicTextType} from '../content/ElectronicText.js';
import {DataResourceAttributeType} from '../content/DataResourceAttribute.js';
import {DataResourceRoleType} from '../content/DataResourceRole.js';
import {SurveyResponseType} from '../content/SurveyResponse.js';
import {DataResourcePurposeType} from '../content/DataResourcePurpose.js';
import {VideoDataResourceType} from '../content/VideoDataResource.js';
import {ContentRevisionItemType} from '../content/ContentRevisionItem.js';
import {SurveyType} from '../content/Survey.js';
import {AudioDataResourceType} from '../content/AudioDataResource.js';
import {ContentType} from '../content/Content.js';
import {DataTemplateTypeType} from '../content/DataTemplateType.js';
import {DataResourceTypeType} from '../content/DataResourceType.js';
import {OtherDataResourceType} from '../content/OtherDataResource.js';
import {CharacterSetType} from '../content/CharacterSet.js';
import {ImageDataResourceType} from '../content/ImageDataResource.js';
import {UserLoginType} from '../login/UserLogin.js';


const DataResourceType = new GraphQLObjectType({
  name: 'DataResourceType',
  description: 'Type for DataResource in content',

  fields: () => ({
    dataResourceName: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${dataResource.surveyId}`)
    },
    dataTemplateType: {
      type: DataTemplateTypeType,
      args : {dataTemplateTypeId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataTemplateTypes/find?dataTemplateTypeId=${dataResource.dataTemplateTypeId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    dataCategory: {
      type: DataCategoryType,
      args : {dataCategoryId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataCategorys/find?dataCategoryId=${dataResource.dataCategoryId}`)
    },
    surveyResponse: {
      type: SurveyResponseType,
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyResponses/find?surveyResponseId=${dataResource.surveyResponseId}`)
    },
    characterSet: {
      type: CharacterSetType,
      args : {characterSetId: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`content/characterSets/find?characterSetId=${dataResource.characterSetId}`)
    },
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${dataResource.lastModifiedByUserLogin}`)
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
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataResource/dataResourceTypes/find?dataResourceTypeId=${dataResource.dataResourceTypeId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (dataResource, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${dataResource.createdByUserLogin}`)
    },
    imageDataResources: {
      type: new GraphQLList(ImageDataResourceType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/imageDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    productFeatureDataResources: {
      type: new GraphQLList(ProductFeatureDataResourceType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourceAttributes: {
      type: new GraphQLList(DataResourceAttributeType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceAttributes/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    contents: {
      type: new GraphQLList(ContentType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`/contents/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    otherDataResources: {
      type: new GraphQLList(OtherDataResourceType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/otherDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    electronicTexts: {
      type: new GraphQLList(ElectronicTextType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/electronicTexts/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourceMetaDatas: {
      type: new GraphQLList(DataResourceMetaDataType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceMetaDatas/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    contentRevisionItems: {
      type: new GraphQLList(ContentRevisionItemType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentRevisionItems/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourcePurposes: {
      type: new GraphQLList(DataResourcePurposeType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourcePurposes/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    dataResourceRoles: {
      type: new GraphQLList(DataResourceRoleType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceRoles/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    audioDataResources: {
      type: new GraphQLList(AudioDataResourceType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/audioDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    },
    videoDataResources: {
      type: new GraphQLList(VideoDataResourceType),
      args : {},
      resolve: (dataResource, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/videoDataResources/find?dataResourceId=${dataResource.dataResourceId}`)
    }
  })
});

export {DataResourceType};
    




const DataResourceInputType = new GraphQLInputObjectType({
  name: 'DataResourceInputType',
  description: 'input type for DataResource in content',

  fields: () => ({
    dataResourceName: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    dataTemplateTypeId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    dataCategoryId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    characterSetId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    localeString: {type: GraphQLString},
    relatedDetailId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString},
    isPublic: {type: GraphQLBoolean},
    objectInfo: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString}
  })
});

export {DataResourceInputType};
    