<?php

namespace App\Modules\Management\Testing\Actions;

class StoreData
{
    static $model = \App\Modules\Management\Testing\Models\Model::class;

    public static function execute($request)
    {
        try {
            $requestData = $request->validated();

            if ($request->hasFile('picture')) {
                $image = $request->file('picture');
                $requestData['picture'] = uploader($image, 'uploads/pictures');
            }
    

            if ($data = self::$model::query()->create($requestData)) {
                return messageResponse('Item added successfully', $data, 201);
            }
        } catch (\Exception $e) {
            return messageResponse($e->getMessage(),[], 500, 'server_error');
        }
    }
}