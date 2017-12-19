
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

import {ContentAssocTypeType} from '../../content/ContentAssocType/ContentAssocTypeType.js';
import {ContentType} from '../../content/Content/ContentType.js';
import {ContentAssocPredicateType} from '../../content/ContentAssocPredicate/ContentAssocPredicateType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const ContentAssocType = new GraphQLObjectType({
  name: 'ContentAssocType',
  description: 'Type for ContentAssoc in content',

  fields: () => ({
    sequenceNum: {type: GraphQLInt},
    lastModifiedDate: {type: GraphQLString},
    contentTo: {
      type: ContentType,
      args : {contentIdTo: {type: GraphQLString}},
      resolve: (contentAssoc, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentAssoc.contentIdTo}`)
    },
    upperCoordinate: {type: GraphQLInt},
    leftCoordinate: {type: GraphQLInt},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentAssoc, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentAssoc.contentId}`)
    },
    mapKey: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    contentAssocPredicate: {
      type: ContentAssocPredicateType,
      args : {contentAssocPredicateId: {type: GraphQLString}},
      resolve: (contentAssoc, args, {loaders}) => loaders.ofbiz.load(`content/content/contentAssocPredicates/find?contentAssocPredicateId=${contentAssoc.contentAssocPredicateId}`)
    },
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (contentAssoc, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${contentAssoc.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    contentAssocType: {
      type: ContentAssocTypeType,
      args : {contentAssocTypeId: {type: GraphQLString}},
      resolve: (contentAssoc, args, {loaders}) => loaders.ofbiz.load(`content/content/contentAssocTypes/find?contentAssocTypeId=${contentAssoc.contentAssocTypeId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (contentAssoc, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${contentAssoc.createdByUserLogin}`)
    }
  })
});

export {ContentAssocType};
    